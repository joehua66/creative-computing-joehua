class Trip{
    constructor(trip){

        this.station= stations.find(s =>{
            return s.id === trip.start_station_id;
        })
        this.endStation= stations.find(s => s.id === trip.end_station_id)

    }
    display(){
        noStroke();
        fill(0,0,255)
    }
}
