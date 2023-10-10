import { createStore } from 'vuex';
import { Burger } from '@/store/Burger';

export default createStore({
	modules: {
		burgerMenu: Burger,
	},
});
