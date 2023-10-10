export const Burger = {
	state: () => ({
		burger: false,
	}),
	mutations: {
		burgerSwitch(state, burger) {
			if (state.burger) {
				state.burger = false;
			} else {
				state.burger = true;
			}
		},
	},
};
