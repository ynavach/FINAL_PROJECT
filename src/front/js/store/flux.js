const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			jwt_token: localStorage.getItem("jwt_token"),
			user: null,	
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
