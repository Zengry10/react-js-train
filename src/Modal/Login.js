export default function LoginScreen(){
    const { register, handleSubmit, formState: { errors }} = useForm()

    return <div>
        <form onSubmit={handleSubmit((data) => {
            fetch("http://edu.project.etherial.fr/auth", {
                method "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password:data.password
                })
            }).then((res) => res.json().then((json) => {
                if (json.status === 200){
                    // On Login
                    localStorage.setItem("token", json.data.token)
                } else {
                    // On login pas avec une erreur "Wrong ID"
                }
            }))
        })}>
        </form>
    </div>
}