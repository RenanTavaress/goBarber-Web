import {ValidationError} from 'yup'

interface Errors {
   [key: string]: string;
}

export default function ValidationsErrors(erro: ValidationError): Errors{
   const validationsErros: Errors = {}

   erro.inner.forEach(erro => {
      validationsErros[erro.path] = erro.message;
   })

   return validationsErros;
}