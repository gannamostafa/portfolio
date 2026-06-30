import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { IContactAPI } from '../../core/model/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit { 

  contact: IContactAPI = {
    sectionTitle: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    showEmail: true,
    showPhone: true,
    showGithub: true,
    showLinkedin: true
  };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe({
      next: (data) => {
        if (data) {
          this.contact = data;
        }
      }
    });
  }

  save() {
    if (this.contact._id) {
      this.contactService.updateContact(this.contact._id, this.contact).subscribe(() => {
        alert("Updated Successfully");
      });
    } else {
      this.contactService.createContact(this.contact).subscribe((data: any) => {
        this.contact = data;
        alert("Saved Successfully");
      });
    }
  }
}