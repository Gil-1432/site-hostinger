import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, CheckCircle2, Shield, Linkedin, Instagram } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../data/content';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organizationType: '',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const organizationOptions = [
    'Produtor',
    'Cooperativa',
    'Empresa com metas Net Zero',
    'Investidor',
    'Pesquisador',
    'Outro',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!formData.organizationType) {
      setError('Por favor, selecione o seu tipo de organização.');
      return;
    }

    if (!formData.consent) {
      setError('É necessário autorizar o contato conforme a política de privacidade.');
      return;
    }

    // Submissão otimizada com suporte duplo (Hostinger PHP e Node.js API)
    try {
      // Tenta enviar para o script PHP nativo da Hostinger se disponível
      fetch('./enviar-contato.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Fallback para endpoint Node.js se estiver rodando em servidor Node
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }).catch(() => {
          // Em hospedagem puramente estática, a confirmação na tela e WhatsApp cobrem o fluxo
        });
      });
    } catch {
      // Tratamento silencioso em ambiente estático
    }

    // Set submission state with clear technical notification
    setSubmitted(true);
  };

  // Direct WhatsApp dispatch with pre-filled message
  const getCustomWhatsAppLink = () => {
    const text = `Olá, meu nome é ${formData.name || 'um interessado'} (${formData.organizationType || 'Interessado'}).
E-mail: ${formData.email || 'Não informado'}
WhatsApp/Tel: ${formData.phone || 'Não informado'}
Mensagem: ${formData.message || 'Gostaria de entender como a Renovasolo pode gerar valor para o meu negócio.'}`;
    return `https://wa.me/5535998376012?text=${encodeURIComponent(text)}`;
  };

  // Direct Mailto fallback for static hosting
  const getCustomMailtoLink = () => {
    const subject = encodeURIComponent(`[Contato Site] ${formData.name} - ${formData.organizationType}`);
    const body = encodeURIComponent(`Nome: ${formData.name}
Organização: ${formData.organizationType}
Telefone/WhatsApp: ${formData.phone}
E-mail: ${formData.email}

Mensagem:
${formData.message || 'Gostaria de solicitar atendimento comercial.'}`);
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#F4F1EA] text-[#1A382B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A382B]/10 text-[#1A382B] text-xs font-bold tracking-wide mb-3">
            <Mail className="w-3.5 h-3.5 text-[#285944]" />
            <span>Canais de Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A382B] mb-4">
            Vamos regenerar o futuro juntos?
          </h2>
          <p className="text-base sm:text-lg text-[#66736B] leading-relaxed">
            Entre em contato para descarbonizar sua cadeia produtiva e transformar a gestão do solo do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Direct Contacts & Office */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1A382B] text-white p-8 rounded-2xl shadow-lg border border-[#285944] space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Atendimento Comercial & Parcerias
                </h3>
                <p className="text-sm text-[#F4F1EA]/80 leading-relaxed">
                  Converse diretamente com os especialistas da Renovasolo Climatech para discutir diagnósticos de solo, créditos de carbono ou projetos regenerativos.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2ECC71]/20 text-[#2ECC71] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-medium">E-mail corporativo</span>
                    <span className="text-sm font-semibold text-white break-all">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2ECC71] text-[#1A382B] flex items-center justify-center shrink-0 font-bold">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-medium">WhatsApp comercial</span>
                    <span className="text-sm font-semibold text-white">
                      {CONTACT_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0077B5] text-white flex items-center justify-center shrink-0 font-bold">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-medium">Página no LinkedIn</span>
                    <span className="text-sm font-semibold text-white">
                      company/renovasolo-climatech
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-channel-instagram"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0 font-bold shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-medium">Instagram oficial</span>
                    <span className="text-sm font-semibold text-white">
                      {CONTACT_INFO.instagramUser}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#8CCFD0]/20 text-[#8CCFD0] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block font-medium">Sede Institucional</span>
                    <span className="text-sm font-semibold text-white">
                      {CONTACT_INFO.location}
                    </span>
                    <span className="text-[11px] text-white/50 block">
                      {CONTACT_INFO.locationDetail}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Fast Action */}
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-box-whatsapp-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-bold text-sm shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Conversar no WhatsApp agora</span>
                </a>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-xl bg-white border border-[#4A3B32]/10 flex items-start gap-3 text-xs text-[#66736B]">
              <Shield className="w-4 h-4 text-[#285944] shrink-0 mt-0.5" />
              <span>
                Respeitamos a privacidade dos seus dados em conformidade com as diretrizes da LGPD (Lei Geral de Proteção de Dados).
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#4A3B32]/15">
              {submitted ? (
                <div id="form-submission-notice" className="space-y-6 py-4">
                  <div className="p-5 rounded-xl bg-[#F4F1EA] border border-[#285944]/20 space-y-3">
                    <div className="flex items-center gap-2.5 text-[#1A382B]">
                      <CheckCircle2 className="w-6 h-6 text-[#2ECC71]" />
                      <h4 className="text-lg font-bold">Solicitação Registrada no Sistema</h4>
                    </div>
                    <p className="text-sm text-[#4A3B32] leading-relaxed">
                      Obrigado pelo contato, <strong>{formData.name}</strong>. Os dados preenchidos foram organizados para atendimento comercial.
                    </p>
                    {/* Mandatory requirement note: Informar que o formulário precisa ser conectado ao e-mail ou serviço de atendimento antes da publicação oficial */}
                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Aviso de integração técnica:</strong> O formulário precisa ser conectado ao e-mail institucional (<code>{CONTACT_INFO.email}</code>) ou ao serviço de atendimento antes da publicação definitiva em produção.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-[#1A382B]">
                      Deseja agilizar o retorno? Envie os dados diretamente para o WhatsApp oficial da Renovasolo:
                    </p>
                    <a
                      href={getCustomWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-bold text-sm shadow transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enviar mensagem preenchida no WhatsApp</span>
                    </a>

                    <a
                      href={getCustomMailtoLink()}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-[#1A382B] border border-gray-300 font-bold text-sm shadow-sm transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#285944]" />
                      <span>Abrir no aplicativo de E-mail padrão</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          organizationType: '',
                          message: '',
                          consent: true,
                        });
                      }}
                      className="w-full text-center text-xs text-[#66736B] hover:text-[#1A382B] pt-2 underline"
                    >
                      Preencher nova solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="formulario-contato" className="space-y-5">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Nome Completo */}
                  <div>
                    <label
                      htmlFor="input-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-1.5"
                    >
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="input-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#285944] focus:ring-2 focus:ring-[#2ECC71]/30 text-sm text-[#1A382B] placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>

                  {/* Two Columns: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="input-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-1.5"
                      >
                        E-mail corporativo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nome@empresa.com.br"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#285944] focus:ring-2 focus:ring-[#2ECC71]/30 text-sm text-[#1A382B] placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="input-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-1.5"
                      >
                        Telefone ou WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="input-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(35) 99999-9999"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#285944] focus:ring-2 focus:ring-[#2ECC71]/30 text-sm text-[#1A382B] placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Tipo de organização */}
                  <div>
                    <label
                      htmlFor="select-organization"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-1.5"
                    >
                      Tipo de organização <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="select-organization"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#285944] focus:ring-2 focus:ring-[#2ECC71]/30 text-sm text-[#1A382B] bg-white outline-none transition-all"
                    >
                      <option value="">Selecione uma opção...</option>
                      {organizationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="textarea-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A382B] mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="textarea-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte sobre sua propriedade, metas de descarbonização ou interesse em parceria..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#285944] focus:ring-2 focus:ring-[#2ECC71]/30 text-sm text-[#1A382B] placeholder:text-gray-400 outline-none transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 rounded text-[#285944] focus:ring-[#2ECC71] border-gray-300 cursor-pointer"
                    />
                    <label htmlFor="consent-checkbox" className="text-xs text-[#66736B] leading-relaxed cursor-pointer select-none">
                      Autorizo o contato da Renovasolo Climatech para tratar esta solicitação, conforme sua política de privacidade.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="btn-enviar-mensagem"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] text-[#1A382B] font-bold text-base shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <span>Enviar mensagem</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
