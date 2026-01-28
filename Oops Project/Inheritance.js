class mobile {
    name;
    battery;
    size;
    Ram;
    GB;
    constructor(name,battery,size,Ram,GB) {
        this.name=name
        this.battery=battery
        this.size=size
        this.Ram=Ram
        this.GB=GB
    }
}

class mobile2 extends mobile {
    camera;
    DND;
    constructor(name,battery,size,Ram,GB,camera,DND){
        super(name,battery,size,Ram,GB)

        this.camera=camera
        this.DND=DND
    }
}

let dtl = new mobile2("VIVO","5000 mh",6.5,8,256,"50pxl","Yes")
console.table(dtl);
