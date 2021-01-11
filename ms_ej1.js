const { Etcd3 }= require("etcd3");
const client = new Etcd3();

(async () => {
    const valor = await client.get("contra_key").string();
    console.log("El valor de la contraseña es ", valor);
    await client.delete().all();
})();