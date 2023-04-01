const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			jwt_token: localStorage.getItem("jwt_token"),
			user: null,	
		},
		actions: {
			setToken: (jwt_token) => {
				setStore({jwt_token: jwt_token});
				localStorage.setItem("jwt_token", jwt_token);
			},

			removeToken: () => {
				localStorage.removeItem("jwt_token");
				setStore({jwt_token: null});
			},

			getProfile: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/private", {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.jwt_token}`,
						}
					})
					if (response.status == 200) {
						const body = await response.json();
						console.log(body);
						setStore({user: body.user});
					}
					else {
						alert("Se produjo un error al cargar el perfil de usuario");
						throw new Error (response.status);
					}
				} catch (error) {
					console.log("Estatus de error: ", error);
				}
			},
		}
	};
};

export default getState;
