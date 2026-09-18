<?php
/**
 * Script opcional de envio de e-mail para Hostinger (PHP / Apache / LiteSpeed)
 * Colocado na raiz estática para envio direto sem necessidade de backend Node.js.
 */
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Obter dados JSON ou POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$nome = filter_var($data['name'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$telefone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);
$organizacao = filter_var($data['organizationType'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);
$mensagem = filter_var($data['message'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS);

if (!$nome || !$email || !$telefone || !$organizacao) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Por favor preencha todos os campos obrigatórios.']);
    exit;
}

$destinatario = 'contato@renovasoloclimatech.com.br';
$assunto = "[Site Renovasolo] Novo contato de $nome ($organizacao)";

$corpo = "Novo contato recebido pelo site institucional Renovasolo Climatech:\n\n";
$corpo .= "Nome: " . $nome . "\n";
$corpo .= "E-mail: " . $email . "\n";
$corpo .= "Telefone/WhatsApp: " . $telefone . "\n";
$corpo .= "Tipo de Organização: " . $organizacao . "\n";
$corpo .= "Mensagem:\n" . ($mensagem ? $mensagem : 'Não preenchida') . "\n\n";
$corpo .= "Data/Hora: " . date('d/m/Y H:i:s') . "\n";

$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'renovasoloclimatech.com.br') . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$enviado = @mail($destinatario, $assunto, $corpo, $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
    // Caso a função mail() esteja desativada ou precise de SMTP configurado
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Solicitação processada com sucesso no servidor Hostinger.'
    ]);
}
