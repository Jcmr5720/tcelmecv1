import { useState } from 'preact/hooks';
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import '../css/formulario.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (name === '' || email === '' || comment === '') {
      setMensaje('Error: no se han completado todos los campos');
    } else {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const templateParams = {
        from_name: name,
        from_email: email,
        message: comment,
        time: time,
      };

      emailjs
        .send('service_wh09137', 'template_rzfq7yn', templateParams, 'svCY0z7OS8ZQklArI')
        .then((response) => {
          console.log('Correo electrónico enviado correctamente!', response);
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });

      setName('');
      setEmail('');
      setComment('');
      setMensaje(`Hola, tus datos son:<br/><br/>Nombre: ${name}<br/>Email: ${email}
        <br/>Mensaje:<br/>${comment}<br/>Enviado a las: ${time}`);
    }
  };

  const handleNameChange = (e: Event) => {
    setName((e.target as HTMLInputElement).value);
  };

  const handleEmailChange = (e: Event) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleCommentChange = (e: Event) => {
    setComment((e.target as HTMLTextAreaElement).value);
  };

  return (
    <div className='contenedorContactame'>
      <form onSubmit={handleSubmit}>
        <label>
          <div className='labelInput1'>
            <span><AiOutlineArrowRight /></span>
            <input type='text' value={name} placeholder='Escribe tu nombre' onChange={handleNameChange} />
            <span className='logox'><AiOutlineClose /></span>
          </div>
        </label>
        <label>
          <div className='labelInput2'>
            <span><AiOutlineArrowRight /></span>
            <input type='email' value={email} placeholder='Escribe tu correo' onChange={handleEmailChange} />
            <span className='logox'><AiOutlineClose /></span>
          </div>
        </label>
        <label>
          <div className='labelInput3'>
            <textarea value={comment} placeholder='Escribe tu comentario' onChange={handleCommentChange} />
          </div>
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && (<span className='textContactame' dangerouslySetInnerHTML={{ __html: mensaje }}></span>)}
    </div>
  );
};

export default ContactForm;
