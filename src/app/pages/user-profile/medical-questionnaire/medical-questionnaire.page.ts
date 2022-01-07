import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-questionnaire',
  templateUrl: './medical-questionnaire.page.html',
  styleUrls: ['./medical-questionnaire.page.scss'],
})
export class MedicalQuestionnairePage implements OnInit {

  pName: String = 'Medical Questionnaire';
  treatment = [
    {
      id: 'Asthma/Bronchitis',
      name: 'Asthma/Bronchitis'
    },
    {
      id: 'Hypertension/Heart Problems',
      name: 'Hypertension/Heart Problems'
    },
    {
      id: 'High Blood Pressure',
      name: 'High Blood Pressure'
    },
    {
      id: 'Palpitations',
      name: 'Palpitations'
    },
    {
      id: 'Stroke',
      name: 'Stroke'
    },
    {
      id: 'High Cholesterol',
      name: 'High Cholesterol'
    },
    {
      id: 'A-Work Related Injury or Illness',
      name: 'A-Work Related Injury or Illness'
    },
    {
      id: 'Lung Problems',
      name: 'Lung Problems'
    },
    {
      id: 'Tuberculosis',
      name: 'Tuberculosis'
    },
    {
      id: 'Anxiety/Depression',
      name: 'Anxiety/Depression'
    },
    {
      id: 'Allergies',
      name: 'Allergies'
    },
    {
      id: 'Thyroid Problems',
      name: 'Thyroid Problems'
    },
    {
      id: 'Diabetes',
      name: 'Diabetes'
    },
    {
      id: 'Cancer or Tumour',
      name: 'Cancer or Tumour'
    },
    {
      id: 'Impairment, Disability or Handicap or any type',
      name: 'Impairment, Disability or Handicap or any type'
    },
    {
      id: 'Back Strain Injury',
      name: 'Back Strain Injury'
    },
    {
      id: 'Persistent Headaches/Migraines',
      name: 'Persistent Headaches/Migraines'
    },
    {
      id: 'Fits/Seizures/Epilepsy/Blackouts',
      name: 'Fits/Seizures/Epilepsy/Blackouts'
    },
    {
      id: 'Arthritis/Rheumatism',
      name: 'Arthritis/Rheumatism'
    },
    {
      id: 'Joint Problems/Fractures/Broken Bones/Dislocation',
      name: 'Joint Problems/Fractures/Broken Bones/Dislocation'
    },
    {
      id: 'Have you ever been Hospitalised',
      name: 'Have you ever been Hospitalised'
    },
    {
      id: 'Repetitive Strain Injury/Overuse Syndrome',
      name: 'Repetitive Strain Injury/Overuse Syndrome'
    },
    {
      id: 'Have you ever had any Operations',
      name: 'Have you ever had any Operations'
    },
    {
      id: 'Hernias/Rupture',
      name: 'Hernias/Rupture'
    },
    {
      id: 'Loss of Hearing',
      name: 'Loss of Hearing'
    },
    {
      id: 'Visual impairment',
      name: 'Visual impairment'
    },
    {
      id: 'Sleep problems',
      name: 'Sleep problems'
    },
    {
      id: 'Hay fever',
      name: 'Hay fever'
    },
    {
      id: 'Skin disorders/Dermatitis',
      name: 'Skin disorders/Dermatitis'
    },
    {
      id: 'Whiplash, Neck Injury',
      name: 'Whiplash, Neck Injury'
    },
    {
      id: 'Mental or Nervous Disorder',
      name: 'Mental or Nervous Disorder'
    },
    {
      id: 'Back/Neck problems',
      name: 'Back/Neck problems'
    },
    {
      id: 'Defect in sight of either eye (not including glasses)',
      name: 'Defect in sight of either eye (not including glasses)'
    },
    {
      id: 'Skin Cancer',
      name: 'Skin Cancer'
    },
    {
      id: 'Sporting Injuries',
      name: 'Sporting Injuries'
    },
    {
      id: 'Blood in urine',
      name: 'Blood in urine'
    },
    {
      id: 'Stomach Problems/Ulcers',
      name: 'Stomach Problems/Ulcers'
    },
    {
      id: 'Unexplained weight loss',
      name: 'Unexplained weight loss'
    },
    {
      id: 'Varicose veins',
      name: 'Varicose veins'
    },
    {
      id: 'Difficulty in passing urine',
      name: 'Difficulty in passing urine'
    },
    {
      id: 'Bowel problems',
      name: 'Bowel problems'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
