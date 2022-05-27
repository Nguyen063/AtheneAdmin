

export class Class{
    id:String;
    TutorInfo=Object({ 
        UserID: String,
        Name: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
    });
    ClassInfo=Object({
    ClassID: String,
    Subject: String,
    Status: String,
    Grade: String,
    Routine: String,
    Address: String,
    Fee: String,
    RetentionTime: String
     });
     StudentInfo=Object({ 
        UserID: String,
        Name: String,
        Direct: String,
        Gender: String,
        DOB: String,
        CCCD: String,
    });
    
    constructor(){
        this.id="";
        this.TutorInfo.Name="";
        this.TutorInfo.UserID="";
        this.TutorInfo.Direct="";
        this.TutorInfo.Gender="";
        this.TutorInfo.DOB="";
        this.TutorInfo.CCCD="";

        this.StudentInfo.Name="";
        this.StudentInfo.UserID="";
        this.StudentInfo.Direct="";
        this.StudentInfo.Gender="";
        this.StudentInfo.DOB="";
        this.StudentInfo.CCCD="";

        this.ClassInfo.ClassID="";
        this.ClassInfo.Status="";
        this.ClassInfo.Subject="";
        this.ClassInfo.Grade="";
        this.ClassInfo.Routine="";
        this.ClassInfo.Address="";
        this.ClassInfo.Fee="";
        this.ClassInfo.RetentionTime="";

     }
}