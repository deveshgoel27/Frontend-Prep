# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


// first step is to create a form with onsubmit handlechange

// second step is create all lable input with useState value = {formdata,setFormdata} value = {formData.firstName}

// 3rd step -> create onchange on HandleChange , handleCheckBoxChange-->  every input that will dstructure name , value and set the setFormData({...formData.[name]: value}), cndtn in handleCheckBoxChange that if checked push name otherwise filter 

//4th step -> now create validation for everyone also let newErros = {}; if formfdat fortsname empty the newErros.firstname= name required 

//5th step -> validation next step -> cons isValid = validatForm(); if(isValid) then formdata subited and reset setFormdata with all things  

//6th step -> also create usestate for submitted and erros then  in valudatiopn first setSuvmitted false and in isValid cndtn it will be true and last setEroors will be empty and in else for validatio failed ;

//7th step -> after every input check errors                    {errors.firstName && <div className='error'>{errors.firstName}</div>}

//8th step -> 
        {submitted && <div className="success">Form submitted successfully!</div>}

