-- 1.	Productos más vendidos por mes (mínimamente 8 y de cada producto debe tener como mínimo 12 compradores )

select 
p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad'
from
producto p join
detalleCompra dc on dc.idproducto = p.idproducto join
compra c on dc.idcompra = c.idcompra
where year(c.fecha) = year(now()) and month(c.fecha) = ?
group by p.idproducto order by sum(dc.cantidad) desc;

-- 2.	Clientes que más compraron por año. (Mínimamente 8 clientes deben ser mostrados y sus ventas deben ser altas, es decir que cada cliente mostrado por lo menos algunos hicieron 15 compras y otros 12, 20, etc.)
select distinct(year(fecha)) as 'anho'
from compra;

select 
concat(c.primerNombre, ' ', c.segundoNombre, ' ', c.apellidoPaterno, ' ', c.apellidoMaterno) as 'cliente',
count(co.idcompra) as 'compras'
from
cliente c join
compra co on co.idcliente = c.idcliente
where year(co.fecha) = ?
group by c.idcliente order by count(co.idcompra) desc;
-- 3.	Cantidad de ventas por departamento (de la categoría de productos) de mayor a menor. Dada dos fechas seleccionadas mostrar el reporte.

select 
c.idcategoria, c.nombre, count(co.idcompra) as "compra"
from
categoria c join
subcategoria sc on sc.idcategoria = c.idcategoria join
producto p on p.idsubcategoria = sc.idsubcategoria join
detalleCompra dc on dc.idproducto  = p.idproducto join
compra co on dc.idcompra = co.idcompra
where co.fecha between ? and ? group by c.idcategoria order by c.idcategoria desc;

-- 4.	Seleccionada un departamento (de la categoría de productos) mostrar reporte estadístico de los productos vendidos de mayor a menor.


-- 5.	Mostrar un reporte estadístico por ciudades el promedio de ventas que se realizó.

select 
d.departamento, count(co.idcompra) "cantidad"
from 
departamento d join
cliente c on c.iddepartamento = d.iddepartamento join
compra co on co.idcliente = c.idcliente
group by d.departamento order by d.iddepartamento;

-- 6.	Seleccionado una ciudad mostrar los 5 productos más vendidos.

-- 7.	Listar todos aquellos colaboradores y la cantidad de órdenes que despacharon cada uno de ellos.

-- 8.	Listar todos aquellos verificadores y la cantidad de órdenes que cambiaron a Entregado.












--  ejemplo de consulta en %

-- d.	Listar de los últimos 3 años, un reporte estadístico donde muestre cuantos empleados de género masculino y género femenino se tuvo cada año.
select
g.anho,
round(
    (100 * sum(if(e.genero = 1, 1, 0))
    /
    count(e.idEmpleado)),
    2
) as "masculino",
round(
    (100 * sum(if(e.genero = 0, 1, 0))
    /
    count(e.idEmpleado)),
    2
) as "femenino"
from
gestion g join empleado e on 
e.idGestion = g.idGestion
group by g.idGestion
HAVING g.anho >= year(now()) - 3;
