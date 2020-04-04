"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryReport {
    constructor() {
        this.queryOne = "select p.idproducto, p.titulo, sum(dc.cantidad) as 'cantidad' from producto p join detalleCompra dc on dc.idproducto = p.idproducto group by p.idproducto order by sum(dc.cantidad) desc";
        this.queryThree = "";
        this.queryFive = "";
        this.querySeven = "";
    }
}
exports.QueryReport = QueryReport;
const queryReport = new QueryReport();
exports.default = queryReport;
