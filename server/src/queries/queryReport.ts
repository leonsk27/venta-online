export class QueryReport {
    public queryOne = "select p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad' from producto p join detalleCompra dc on dc.idproducto = p.idproducto join compra c on dc.idcompra = c.idcompra where year(c.fecha) = year(now()) and month(c.fecha) = ? group by p.idproducto order by sum(dc.cantidad) desc";
    public queryTwo = "";
    public queryThree = "select c.idcategoria, c.nombre, count(co.idcompra) as 'compra' from categoria c join subcategoria sc on sc.idcategoria = c.idcategoria join producto p on p.idsubcategoria = sc.idsubcategoria join detalleCompra dc on dc.idproducto  = p.idproducto join compra co on dc.idcompra = co.idcompra where co.fecha between ? and ? group by c.idcategoria order by c.idcategoria desc";
    public queryFour = "";
    public queryFive = "select d.departamento, count(co.idcompra) 'cantidad' from departamento d join cliente c on c.iddepartamento = d.iddepartamento join compra co on co.idcliente = c.idcliente group by d.departamento order by d.iddepartamento";
    public querySix = "";
    public querySeven = "select d.departamento, count(co.idcompra) 'cantidad' from departamento d join cliente c on c.iddepartamento = d.iddepartamento join compra co on co.idcliente = c.idcliente group by d.departamento order by d.iddepartamento";
    public queryEight = "";
}
const queryReport = new QueryReport();
export default queryReport;