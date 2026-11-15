const SUPABASE_URL = "https://hypxybgvxvpwfqflijty.supabase.co";
const SUPABASE_KEY = "sb_publishable_x6A2XiGzM9F2Qlk9xwBUvA_UK3HoJJz";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  const { data, error } = await db
    .from("usuario inválido")
    .select("*")
    .eq("usuario inválido", usuario)
    .eq("usuario inválido", password)
    .maybeSingle();

    if (error) {
      mensaje.textContent = "Error al conectar con la base de datos";
      console.error(error);
      return;

    }

    if (data) {
      sessionStorage.setItem("usuario", usuario);
      window.location.href = "bienvenida.html";
    } else {
      mensaje.textContent = "Usuario inválido";
    }
  });      

     
