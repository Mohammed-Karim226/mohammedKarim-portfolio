import React, {useState, useRef, Suspense} from 'react';
import emailjs from '@emailjs/browser';
import { Fox } from '../models';
import { Canvas } from '@react-three/fiber';
import Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const {alert, showAlert, hideAlert} = useAlert();
  const handleChange = (e)=> {
    setForm({...form, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs.send(

     'service_dksjroi',
      'template_cvqh6qh',
      {
        from_name:form.name,
        to_name:'Mohammed_Karim',
        from_email:form.email,
        to_email:'mo7amedaziz2020@gmail.com',
        message:form.message

      },
      '90ke9l6oztSHAn6qw'
    ).then(()=>{
      setIsLoading(false);
      showAlert({show:true, text:'messesge send successfull', type:'success'});
      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:'', email:'', message:''});
      }, [2000])
      
    }).catch((err)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(err);
      showAlert({show:false, text:"messesge doesn't send successfull", type:'danger'});
    })
  };

  const handleFocus = ()=>setCurrentAnimation('walk');
  const handleBlur = ()=>setCurrentAnimation('idle');


  return (
    <section
    className='relative flex lg:flex-row flex-col max-container h-full'
    >
      {alert.show && <Alert {...alert} />}
      {/* <Alert text="hey" /> */}
     <div className='flex-1 min-w[50%] flex flex-col' >
          <h1 className='head-text' >Get in Touch</h1>
          <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} > 
              <label className='text-black-500 font-semibold' >
                Name
                <input type='text' name='name' className='input' placeholder='MK_7' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              </label>
              <label className='text-black-500 font-semibold' >
                Email
                <input type='email' name='email' className='input' placeholder='MK_7@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              </label>
              <label className='text-black-500 font-semibold' >
                Message
                <textarea  name='message' rows={4} className='textarea' placeholder='Let me know how can i help you !' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              </label>
              <button className='btn' disabled={isLoading} type='submit' onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending...' : 'Send Messege'}</button>
          </form>
     </div>
     <div className='lg:w-1/2 w-full lg-:h-auto md:h[550px] h-[350px]' >
      <Canvas
      camera={{position:[0, 0, 5],
        fov:75,
        near:0.1,
        far:1000
      
      }}


      >
        <directionalLight intensity={2.5} position={[0, 0,1]} />
        <ambientLight intensity={0.5}/>
       <Suspense fallback={<Loader/>}>
       <Fox
       currentAnimation={currentAnimation}
       position={[0.5, 0.35, 0]}
       rotation={[12.6, -0.6, 0]}
       scale={[0.5, 0.5, 0.5]}
       />
       </Suspense>
      </Canvas>
     </div>
    </section>
  )
}

export default Contact;