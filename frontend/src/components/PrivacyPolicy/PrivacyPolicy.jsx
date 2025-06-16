import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary  mt-5 mb-4">Privacy and Confidentiality Policy and Procedure</h1>

      <p><strong>Policy</strong></p>
      <p>
        CAPITAL COMPASSION CARE is committed to protecting the privacy of its clients.
        CAPITAL COMPASSION CARE strives to meet its regulatory and standard obligations regarding the collection, use, and disclosure of personal information.
        Company information, which is considered proprietary and confidential, is also protected by CAPITAL COMPASSION CARE.
      </p>
      <p>
        CAPITAL COMPASSION CARE has implemented this procedure to ensure that all legislative and standard obligations related to privacy and confidentiality of information are met.
        This policy and procedure apply to all employees and departments.
      </p>

      <p><strong>Applicable Laws and Regulations</strong></p>
      <ul>
        <li>Australian Privacy Principles</li>
        <li>Privacy Act 1988</li>
        <li>Aged Care Act 1997</li>
        <li>Aged Care Quality and Safety Commission Act 2018</li>
        <li>Add other applicable regulations, standards or laws</li>
      </ul>

      <p>
        CAPITAL COMPASSION CARE complies with the requirements laid out in the above-mentioned regulations.
        CEO is responsible for staying up-to-date with the latest regulatory requirements as described in CAPITAL COMPASSION CARE Compliance policy and procedure.
      </p>

      <p><strong>Personal Information</strong></p>
      <p>CAPITAL COMPASSION CARE only collects personal information that is necessary to perform its service provision and operational activities.</p>

      <p><strong>Clients:</strong></p>
      <ul>
        <li>Personal Identification Information</li>
        <li>Health Information</li>
        <li>Care Preferences</li>
        <li>Emergency Contacts</li>
        <li>Financial Information</li>
        <li>Other Relevant Information</li>
      </ul>

      <p><strong>Employees:</strong></p>
      <p>CAPITAL COMPASSION CARE collects the following information from employees and prospective candidates for employment, following the Australian Privacy Principles and Privacy Act 1988.</p>

      <p><strong>Information Collection and Consent</strong></p>
      <p>
        All information is collected through relevant online or computerised forms, which are stored in the CAPITAL COMPASSION CARE database.
        Client information is collected and managed by the Care department. Employee information is collected and managed by the Human Resources department.
      </p>
      <p>
        All information is collected and processed with the written consent of the information provider.
        The CAPITAL COMPASSION CARE Information Collection, Use and Disclosure Consent Form is used to obtain consent.
      </p>

      <p><strong>Information Security</strong></p>
      <p>
        CAPITAL COMPASSION CARE ensures the protection of collected personal information along with company information that is deemed to be confidential through an Information Security system.
      </p>

      <p><strong>Storage</strong></p>
      <p>Access to all information is restricted and protected through individual login credentials and passwords assigned to all employees.</p>

      <p><strong>Breaches</strong></p>
      <p>
        CAPITAL COMPASSION CARE evaluates the risk of data breaches resulting in unintended disclosure of private or confidential information in accordance with the Risk Management policy and procedure.
      </p>
      <p>
        All possible violations are reported to the CEO and recorded in the Incident Register. Remedial actions are taken according to the Incident Management and Continuous Improvement policies.
        Notifiable breaches are escalated to:
      </p>
      <ul>
        <li>Australian Information Commissioner</li>
        <li>Aged Care Quality and Safety Commission</li>
        <li>Law Enforcement</li>
      </ul>

      <p><strong>Use and Disclosure of Information</strong></p>
      <p>
        CAPITAL COMPASSION CARE uses client information for service delivery, care planning, financial management, and communication.
        Employee information is used for recruitment, rostering, training, and performance management.
      </p>

      <p>
        Disclosure of information only occurs with consent or when required by law, audits, or government bodies.
      </p>

      <p><strong>Download Full Policy:</strong></p>
      <a
        href="/privacy-policy.pdf"
        download
        className="btn btn-outline-primary"
      >
        Download Privacy Policy PDF
      </a>
    </div>
  );
};

export default PrivacyPolicy;
