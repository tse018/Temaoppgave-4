import Home from './views/Home.vue';
import Slideshow from './views/Slideshow.vue';
import ContactForm from './views/ContactForm.vue';
import Quizapp from './views/Quizapp.vue';
import SortTable from './views/SortTable.vue';
import TodoList from './components/TodoList.vue';

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'slideshow', path: '/slideshow', component: Slideshow },
   { name: 'contactform', path: '/contactform', component: ContactForm },
   { name: 'quizapp', path: '/quizapp', component: Quizapp },
   { name: 'sorttable', path: '/sorttable', component: SortTable },
   { name: 'todolist', path: '/todolist', component: TodoList },
]