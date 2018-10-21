import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  statusList  = ['Stable', 'Critical', 'Finished'];
  invalidProjectNames = ['Test'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      //'projectname': new FormControl(null, [Validators.required, this.invalidProjectName.bind(this)]),
      'projectname': new FormControl(null, [Validators.required],this.invalidProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'status': new FormControl('Critical')
    });
  }

  onSubmit(){
    console.log('Project Name: '+(this.projectForm.get('projectname')).value);
    console.log('E-mail: '+(this.projectForm.get('email')).value);
    console.log('Status: '+(this.projectForm.get('status')).value);
    this.projectForm.reset();
  }
  
 /* invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (this.invalidProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsInvalid': true};
    }
    return null;
  }*/

  invalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise =  new Promise<any>((resolve, reject) => {
      if (this.invalidProjectNames.indexOf(control.value) !== -1) {
        resolve({'nameIsInvalid': true});
      }
      resolve(null);
    });
    return promise;
  }
}
