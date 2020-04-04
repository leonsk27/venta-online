export class QueryReport {
    public queryOne = "select p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad' from producto p join detalleCompra dc on dc.idproducto = p.idproducto group by p.idproducto order by sum(dc.cantidad) desc";
    public queryThree = "";
    public queryFive = "";
    public querySeven = "";
}
const queryReport = new QueryReport();
export default queryReport;