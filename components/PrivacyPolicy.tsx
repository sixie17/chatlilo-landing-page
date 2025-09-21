const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <h3 className="text-gray-600">Last updated: 21 September 2025</h3>

        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold">Chatlilo</span>. We respect
          your privacy and are committed to protecting the personal data of our
          users and their customers. This Privacy Policy explains how we
          collect, use, and safeguard information when you use our platform.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p>
            When businesses and their customers use Chatlilo, we may collect the
            following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Business Account Information:</strong> name, email, phone
              number, billing details, and login credentials.
            </li>
            <li>
              <strong>Customer Communications:</strong> messages sent through
              integrated channels (e.g., WhatsApp, Instagram, chat widget).
            </li>
            <li>
              <strong>Integration Data:</strong> information from connected
              systems such as delivery tracking or order management tools.
            </li>
            <li>
              <strong>Usage Data:</strong> details about how you interact with
              our platform, including IP address, browser type, and access
              times.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use collected data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              To deliver and route customer messages across integrated
              platforms.
            </li>
            <li>
              To provide{" "}
              <span className="font-semibold">AI-powered assistance</span> by
              securely transmitting message context to our{" "}
              <span className="font-semibold">
                third-party LLM service providers
              </span>{" "}
              (e.g., OpenAI) to generate accurate responses.
            </li>
            <li>
              To integrate with third-party services (e.g., delivery tracking,
              CRM systems).
            </li>
            <li>
              To improve our services through analytics and performance
              monitoring.
            </li>
            <li>
              To ensure compliance with Meta’s platform policies and applicable
              laws.
            </li>
            <li>To provide customer support and resolve technical issues.</li>
          </ul>
          <p className="font-semibold">
            We do not sell or rent personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
          <p>We may share data only in the following cases:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              With Meta Platforms (e.g., WhatsApp, Instagram) to enable message
              delivery and platform integrations.
            </li>
            <li>
              With trusted service providers, including:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Hosting & Infrastructure Providers (e.g., cloud hosting,
                  databases).
                </li>
                <li>
                  LLM Service Providers (e.g., OpenAI) used to generate
                  AI-powered responses. These providers may temporarily process
                  message data but do not use it to train their models unless
                  explicitly stated in their own policies.
                </li>
                <li>Payment & Analytics Providers where applicable.</li>
              </ul>
            </li>
            <li>
              When required by law or to protect the safety and rights of our
              users.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Messages and customer data are retained only as long as necessary
              to provide our services, unless a longer period is required by
              law.
            </li>
            <li>
              Businesses may request deletion of their data at any time.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
          <p>
            We implement industry-standard security measures to protect data,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of communications where supported.</li>
            <li>Access controls and authentication for business accounts.</li>
            <li>Regular security monitoring and updates.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the data we hold about you.</li>
            <li>Request corrections or deletions.</li>
            <li>Restrict or object to certain processing activities.</li>
            <li>Export your data.</li>
          </ul>
          <p>
            Requests can be made by contacting us at{" "}
            <a
              href="mailto:contact@chatlilo.com"
              className="text-blue-600 hover:underline"
            >
              contact@chatlilo.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p>
            Chatlilo is not intended for use by children under 16. We do not
            knowingly collect personal data from minors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. International Data Transfers
          </h2>
          <p>
            If you access Chatlilo from outside the region where our servers are
            located, your data may be transferred internationally in compliance
            with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Chatlilo</p>
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

export default PrivacyPolicy;
