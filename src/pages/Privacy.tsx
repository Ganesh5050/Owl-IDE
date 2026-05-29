import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 22, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="animate-section-fade">
                <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Account information (name, email, password)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Usage data and analytics</li>
                  <li>Code metadata (not the code itself, unless explicitly saved)</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-100">
                <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-200">
                <h2 className="text-3xl font-bold mb-4">3. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your information, including AES-256 encryption for data at rest, TLS 1.3 for data in transit, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="animate-section-fade delay-300">
                <h2 className="text-3xl font-bold mb-4">4. Your Code and Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We take your code privacy seriously:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Your code is never used to train our AI models</li>
                  <li>Code is processed in memory and not persistently stored unless you enable project persistence</li>
                  <li>You can delete your data at any time</li>
                  <li>We comply with data residency requirements (US and EU regions available)</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-400">
                <h2 className="text-3xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect usage information and improve our services. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of significant changes via email or through the service.
                </p>
              </section>

              <section className="animate-section-fade delay-500">
                <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy, please contact us at privacy@owlai.co
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

export default Privacy;
