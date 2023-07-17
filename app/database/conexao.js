import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "bdcopa"
})

conexao.connect()
/**
 * 
 * @param {string} sql instrução sql a ser execultada
 * @param {string=id / [selecao ,id]} valores a serem passados ao sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
           if(erro) return reject(mensagemReject) 
           const row = JSON.parse(JSON.stringify(resultado))
           return resolve(row)
        })
    })
}

export default conexao