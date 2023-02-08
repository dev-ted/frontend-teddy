import emailjs from "@emailjs/browser";

export const sendMail = async (data: any) => {
  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
  try {
    return await emailjs
      .sendForm(
        "service_qexluw5",
        "template_xj1glb5",
        data.current,
        process.env.NEXT_PUBLIC_API_KEY
      )
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
