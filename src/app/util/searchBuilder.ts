export class SearchBuilder{
    
    private baseURI : string
    private id : number;

    constructor(resourcePath : string, id : number){
       this.baseURI = `${resourcePath}/record/${id}`
       this.id = id;
    }

    public withFromDate(fromDate : string) : this {

        if(fromDate){
            this.baseURI = this.baseURI.concat(`&fromDate=${fromDate}`);
        }
       
        return this;
    }

    public withToDate(toDate : string) : this {
        
        if(toDate){
            this.baseURI = this.baseURI.concat(`&toDate=${toDate}`);
        }
    
        return this;
    }

    public withMinimumValue(minValue : number) : this {

        if(minValue){
            this.baseURI = this.baseURI.concat(`&minValue=${minValue}`);
        }

        return this;
    }

    public withMaximumValue(maxValue : number) : this {
       
        if(maxValue){
            this.baseURI = this.baseURI.concat(`&maxValue=${maxValue}`);
        }
        
        return this;
    }

    public build() : string{
        // See if there is a better way to do so
        // Dut to not knowing which filter was added first, the URI is manipulated as follows
        return this.baseURI.replace(`/${this.id}&`, `/${this.id}?` );
    }
}