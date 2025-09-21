import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <div className="prose prose-lg max-w-none">
        <h3 className="text-gray-600">Last updated: 21 September 2025</h3>

        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold">Chatlilo</span>. These Terms of Use ("Terms") govern your access to and use
          of our platform, services, and integrations (collectively, the
          "Services"). By using Chatlilo, you agree to these Terms. If you do
          not agree, you may not use the Services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Services Provided</h2>
          <p>
            Chatlilo is a customer communication platform that allows businesses
            to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Connect with customers through channels such as WhatsApp,
              Instagram, and chat widgets.
            </li>
            <li>
              Use AI-powered assistance (via third-party large language models,
              e.g., OpenAI) to generate responses.
            </li>
            <li>
              Integrate with third-party tools such as delivery tracking and
              order management systems.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
          <p>To use Chatlilo, you must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Be at least 18 years old.</li>
            <li>Create an account with accurate and complete information.</li>
            <li>Use the Services only for lawful business purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Account Responsibilities
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You must notify us immediately if you suspect unauthorized access
              to your account.
            </li>
            <li>
              You are responsible for all activities conducted under your
              account.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p>You agree not to use the Services to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any laws or Meta's platform policies.</li>
            <li>Send spam, abusive, or unlawful content.</li>
            <li>
              Attempt to gain unauthorized access to our systems or third-party
              services.
            </li>
            <li>
              Collect or process sensitive personal data without proper consent.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Data Processing & Privacy
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Customer messages and related data may be processed by Chatlilo to
              provide the Services.
            </li>
            <li>
              For AI-powered features, message content may be securely
              transmitted to third-party LLM service providers (e.g., OpenAI)
              for response generation. These providers process data only for
              service delivery and do not use it to train their models unless
              stated in their own policies.
            </li>
            <li>
              Data handling is further described in our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Third-Party Services
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Chatlilo integrates with Meta platforms (e.g., WhatsApp,
              Instagram) and other third-party services.
            </li>
            <li>
              Your use of those services is subject to their own terms and
              policies.
            </li>
            <li>
              Chatlilo is not responsible for failures, downtime, or actions by
              third-party providers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Chatlilo owns all rights to the platform, software, and branding.
            </li>
            <li>
              You retain ownership of your business data and customer
              communications.
            </li>
            <li>
              By using the Services, you grant Chatlilo a limited license to
              process your data solely for the purpose of providing the
              Services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Disclaimers & Limitation of Liability
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>AI Assistance:</strong> Chatlilo provides AI-powered
              assistance. AI responses may not always be accurate or
              appropriate, and you remain responsible for reviewing and
              validating communications sent to your customers.
            </li>
            <li>
              The Services are provided "as is" without warranties of any kind.
            </li>
            <li>
              To the maximum extent permitted by law, Chatlilo shall not be
              liable for any indirect, incidental, or consequential damages.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              You may stop using Chatlilo at any time by closing your account.
            </li>
            <li>
              We may suspend or terminate your access if you violate these Terms
              or misuse the Services.
            </li>
            <li>
              Upon termination, we will delete or anonymize your data in
              accordance with our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. Changes to the Terms
          </h2>
          <p>
            We may update these Terms from time to time. Updated versions will
            be posted on our website, and continued use of the Services
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>
            These Terms are governed by applicable laws. Any disputes will be
            resolved in accordance with our dispute resolution procedures.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Chatlilo.</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@chatlilo.com"
                className="text-blue-600 hover:underline"
              >
                contact@chatlilo.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.chatlilo.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.chatlilo.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
