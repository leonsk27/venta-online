export class QueryReport {
    public queryOne = "select p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad' from producto p join detalleCompra dc on dc.idproducto = p.idproducto join compra c on dc.idcompra = c.idcompra where year(c.fecha) = year(now()) and month(c.fecha) = ? group by p.idproducto order by sum(dc.cantidad) desc";
    
    public queryTwo = "select concat(c.primerNombre, ' ', c.segundoNombre, ' ', c.apellidoPaterno, ' ', c.apellidoMaterno) as 'cliente', count(co.idcompra) as 'compras' from cliente c join compra co on co.idcliente = c.idcliente where year(co.fecha) = '?' group by c.idcliente order by count(co.idcompra) desc";
    public queryTwoAux = "select distinct(year(fecha)) as 'anho' from compra";   

    public queryThree = "select c.idcategoria, c.nombre, count(co.idcompra) as 'compra' from categoria c join subcategoria sc on sc.idcategoria = c.idcategoria join producto p on p.idsubcategoria = sc.idsubcategoria join detalleCompra dc on dc.idproducto  = p.idproducto join compra co on dc.idcompra = co.idcompra where co.fecha between ? and ? group by c.idcategoria order by c.idcategoria desc";
    
    public queryFour = "";
    
    public queryFive = "select d.departamento, count(co.idcompra) 'cantidad' from departamento d join cliente c on c.iddepartamento = d.iddepartamento join compra co on co.idcliente = c.idcliente group by d.departamento order by d.iddepartamento";
    
    public querySix = "select d.departamento, sum(dc.idproducto) as 'Mas vendidos' from departamento d join cliente cl on d.iddepartamento = cl.iddepartamento join compra c on cl.idcliente = c.idcliente join detalleCompra dc on c.idcompra = dc.idcompra join producto p on dc.idproducto = p.idproducto where d.iddepartamento = '?' order by dc.cantidad desc limit 5";
    
    public querySeven = "select d.departamento, count(co.idcompra) 'cantidad' from departamento d join cliente c on c.iddepartamento = d.iddepartamento join compra co on co.idcliente = c.idcliente group by d.departamento order by d.iddepartamento";
    
    public queryEight = "select concat_ws(' ', u.primernombre, u.segundoNombre, u.apellidoPaterno, u.apellidoMaterno) as 'usuario', count(c.estado) from usuario u join rol r on r.idrol = u.idrol join cambioestado ce on u.idusuario = ce.idusuario join compra c on ce.idcompra = c.idcompra where r.nombre = 'verificador' and c.estado = 'entregado' order by 'usuario'";
}
const queryReport = new QueryReport();
export default queryReport;