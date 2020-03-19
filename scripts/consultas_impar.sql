select 
p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad'
from
producto p join
detalleCompra dc on dc.idproducto = p.idproducto
order by sum(dc.cantidad) desc;

select 
c.idcategoria, c.nombre, count(co.idcompra) as "compra"
from
categoria c join
subcategoria sc on sc.idcategoria = c.idcategoria join
producto p on p.idsubcategoria = sc.idsubcategoria join
detalleCompra dc on dc.idproducto  = p.idproducto join
compra co on dc.idcompra = co.idcompra
group by c.idcategoria
where co.fecha between ? and ?;

select 
d.departamento, count(co.idcompra) "cantidad"
from 
departamento d join
cliente c on c.iddepartamento = d.iddepartamento join
compra co on co.idcliente = c.idcliente
group by d.departamento order by d.iddepartamento;




1.	Productos más vendidos por mes (mínimamente 8 y de cada producto debe tener como mínimo 12 compradores )

3.	Cantidad de ventas por departamento (de la categoría de productos) de mayor a menor. Dada dos fechas seleccionadas mostrar el reporte.

5.	Mostrar un reporte estadístico por ciudades el promedio de ventas que se realizó.

7.	Listar todos aquellos colaboradores y la cantidad de órdenes que despacharon cada uno de ellos.