class SwapiService {
    async getResource(url){
        const res =await fetch(url);
        const body = await res.json();
        return body;
    }
    getAll(){
        return this.getResource(`http://kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForMonth&month=6&year=2020&country=ukr`)
    }
}
const swapi = new SwapiService();
swapi.getAll().then((body)=>{
    console.log(body)
})
export default SwapiService