import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 22, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="animate-section-fade">
                <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Owl AI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our services.
                </p>
              </section>

              <section className="animate-section-fade delay-100">
                <h2 className="text-3xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Owl AI provides AI-powered coding assistance including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Code completion and suggestions</li>
                  <li>Code analysis and refactoring</li>
                  <li>Debugging assistance</li>
                  <li>Documentation generation</li>
                  <li>Knowledge graph visualization</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-200">
                <h2 className="text-3xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="animate-section-fade delay-300">
                <h2 className="text-3xl font-bold mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use the service for any illegal purposes</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Upload malicious code or content</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-400">
                <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to your code and content. Owl AI retains all rights to its software, algorithms, and services. We do not claim ownership of your code and will not use it for training our models without explicit permission.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">6. Payment and Billing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paid subscriptions are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees. Refunds are provided on a case-by-case basis as described in our Refund Policy.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your access to the service at any time for violation of these terms or for any other reason we deem necessary.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The service is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Owl AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the service.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at legal@owlai.co
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
