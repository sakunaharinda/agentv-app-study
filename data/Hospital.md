# High-Level Requirement Specification Document for Hospital Access Control

## Introduction 

This document defines the high-level access control requirements for a hospital system. 

## Roles and Access Permissions

### Healthcare Personnel (HCP)
* Licensed Health Care Professional (LHCP): Licensed health care professional that can view and update approved patient records. Restricted from modifying security credentials.
* Designated Licensed Health Care Professional (DLHCP): Designed licensed health care professional that is similar to LHCP but with expanded patient permissions granted by the patient.
* Emergency Responder (ER): Emergency responder that can access critical patient records in emergency situations but cannot modify them.
* Unlicensed Authorized Personnel (UAP): Unlicesed authorized personnel that can an enter, edit, and view demographic and administrative records but not medical diagnoses.
* Lab Technician (LT): Lab technician that can access and update laboratory test results.

### Administrative Personnel
* Administrator: Administrator that can assign roles, manage system configurations, and maintain standards for diagnoses, drugs, and procedures.
* Software Tester: Software tested that can test system functionality but does not access patient data.

### Patients and Representatives
* Patient: Patient that can view their own medical records, designate DLHCPs, and manage access logs.
* Personal Representative: Personal representative that can access medical records of individuals they legally represent.
* Public Health Agent: Public health agent that can view and respond to reports on public health events.

## Access Control Policies

### Patient Data Access
* Patients and personal representatives can view full medical records.
* DLHCPs and LHCPs can view approved medical records.
* ER personnel can view emergency medical records for emergency treatment.
* LTs can view test results.
* Medical records cannot be viewed either by LTs or administrators, to protect patient confidentiality.

### Data Entry and Modification
* LHCPs and DLHCPs can enter and modify medical records but cannot alter security credentials.
* UAPs can update demographic data but not medical diagnoses.
* Patients can edit their demographic information but not medical records.

### Record and Audit Management
* Patients can view their record access logs.
* Administrators maintain system-wide access logs and security audits.

### Role Assignment and Maintenance
* Administrators create and assign HCPs.
* LHCPs can assign UAPs.
* Patients can designate or revoke HCP.


## Conclusion 

This document outlines role-based access control for hospital systems to ensure secure and appropriate data access while maintaining compliance and patient privacy.
