import React,{ useState, useEffect, useRef } from 'react'
import { submitComment } from '../../services';


const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };


  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className='bg-metal bg-opacity-70 rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea placeholder='Comment' name='comment' value={formData.comment ? formData.comment : ''} onChange={onInputChange} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-midnight bg-metal '/>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2 '>
        <input type='text' value={formData.name ? formData.name : ''} onChange={onInputChange} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-midnight bg-metal' placeholder='Name' name='name' />
        <input type='text' value={formData.email ? formData.email : ''} onChange={onInputChange} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-midnight bg-metal' placeholder='Email' name='email' />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData ? formData.storeData : ''} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-FlamePea text-sm'>All fields are required</p>}
      <div className="mt-8">
        <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-VividViolet inline-block bg-Orchid text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-Frog">Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm