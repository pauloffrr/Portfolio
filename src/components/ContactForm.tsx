import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro. Tente novamente mais tarde.");
      });
  };

  if (sent) {
    return (
      <section className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
        <p className="text-lg text-green-400">{t("contact.sent")}</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("contact.title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-xl shadow space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {t("contact.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t("contact.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
        >
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
