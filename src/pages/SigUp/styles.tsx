import styled from 'styled-components'
//import backgroungImage from '../../assets/sign-in-background.png'
import { shade } from 'polished'


export const Container = styled.div`
   height: 100vh;

   display: flex;
   align-items: stretch;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;

   align-items: center;
   place-content: center;


   width: 100%;
   max-width: 700px;


   form {
      margin: 80px 0;
      width: 340px;
      text-align: center;

      h1 {
         margin-bottom: 24px;
      }


     

      a {
         display: block;
         margin-top: 24px;
         color: #f4ede8;
         text-decoration: none;
         transition: color 0.2s;

         &:hover {
            color: ${shade(0.2, '#f4ede8')};
         }
      }
   }

   > a {
         display: block;
         margin-top: 12px;
         color: #f4ede8;
         text-decoration: none;
         transition: color 0.2s;

         display: flex;
         align-items: center;

         svg {
            margin-right: 16px;
         }

         &:hover {
            color: ${shade(0.2, '#f4ede8')};
         }
   }

`

export const Backgroung = styled.div`

   flex: 1;

   background: url('https://xesque.rocketseat.dev/platform/1587470786293-attachment.png') no-repeat center;

   backgroung-size: cover;



`