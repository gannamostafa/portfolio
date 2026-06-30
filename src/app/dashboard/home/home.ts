import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 👈 ضفنا الـ ChangeDetectorRef عشان الصورة
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profileservice } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [Profileservice],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  ProfileFormGroup!: FormGroup;
  technologiesList: string[] = ['MongoDB', 'Express.js', 'Angular', 'Node.js'];

  constructor(private profileService: Profileservice, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ProfileFormGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      description: new FormControl(''),
      email: new FormControl(''),
      github: new FormControl(''),
      linkedin: new FormControl(''),
      profileImage: new FormControl(''),
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profileService.uploadImage(file).subscribe((res) => {
        this.ProfileFormGroup.patchValue({
          profileImage: res.imageUrl
        });
        
        this.cdr.detectChanges(); 
        
        alert('Image uploaded');
      }, (err) => {
        alert('Error uploading image');
        console.error(err);
      });
    }
  }

  addTechnology() {
    const techName = prompt('Enter Technology Name:');
    if (techName && techName.trim() !== '') {
      this.technologiesList.push(techName.trim());
    }
  }

  removeTech(index: number) {
    this.technologiesList.splice(index, 1);
  }

  submitForm() {
    if (this.ProfileFormGroup.valid) {
      const finalData = {
        ...this.ProfileFormGroup.value,
        technologies: this.technologiesList
      };

      this.profileService.saveProfile(finalData).subscribe((res) => {
        alert('Data saved ');
        console.log('done', res);
      }, (err) => {
        alert('Error saving data');
        console.error(err);
      });
    } else {
      alert('Please enter your data');
    }
  }
}