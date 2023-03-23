import throttle from 'lodash.throttle'


const input = document.querySelector(".input");
const output = document.querySelector(".output");
const form = document.querySelector(".js-form");
const button = document.querySelector('[type="submit"]');

// console.log(input, output, form, button);

form.addEventListener('submit', onFormSubmitHandler);
input.addEventListener('input', throttle(onInputHandler, 200));

//называем наш ключ константой и передаем ее - чтобы не опечататься потом, так как мы ниже ее 3 раза юзаем минимум
const INPUT_STORAGE_KEY = "inputValue";


if (localStorage.getItem(INPUT_STORAGE_KEY)){
  //если мы открыли страницу с недописанным текстом, он есть в локал сторедж - пихаем его в 
  let storedInputValue = localStorage.getItem(INPUT_STORAGE_KEY)
  input.value = JSON.parse(storedInputValue);
};

function onInputHandler (event){
//при вводе в инпут, сохраняем в локал сторедж
  const value = event.target.value;
  localStorage.setItem(INPUT_STORAGE_KEY, JSON.stringify(value));

}


function onFormSubmitHandler (event){
  event.preventDefault();
  console.log('onFormSubmitHandler');
  //обнуляем форму при отправке;
  event.currentTarget.reset();
  //убираем с локал сторедж данные так как они уже отправлены и в след.раз будут другие данные
  localStorage.removeItem(INPUT_STORAGE_KEY);
}
