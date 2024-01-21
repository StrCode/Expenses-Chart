/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        soft: "hsl(10, 79%, 65%)",
        mediumBrown:"hsl(33, 100%, 98%)",
        cyan: "hsl(186, 34%, 60%)"
      },
      textColor: {
        cream: "hsl(27, 66%, 92%)",
        darkBrown: "hsl(25, 47%, 15%)",
        paleWhite:"hsl(33, 100%, 98%)",
        mediumBrown: "hsl(28, 10%, 53%)"

      },
      borderColor: {
        mediumBrown:"hsl(33, 100%, 98%)",
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],

}