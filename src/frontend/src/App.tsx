import {
  CheckCircle,
  Clock,
  FileText,
  HeadphonesIcon,
  Mail,
  Monitor,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const PHONE = "855-788-5861";
const PHONE_TEL = "tel:8557885861";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="bg-[#0f2d4a] text-white py-3 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeadphonesIcon className="h-7 w-7 text-[#5bc8f5]" />
            <span className="text-xl font-bold tracking-tight">
              Tech<span className="text-[#5bc8f5]">Audio</span>
            </span>
          </div>
          <a
            href={PHONE_TEL}
            data-ocid="nav.phone.link"
            className="flex items-center gap-2 bg-[#1e6c93] hover:bg-[#1a5f82] transition-colors px-4 py-2 rounded text-white font-semibold text-sm md:text-base"
          >
            <Phone className="h-4 w-4" />
            <span>{PHONE}</span>
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden text-white py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0f2d4a 0%, #1e6c93 60%, #2a8bbf 100%)",
        }}
      >
        {/* decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Microsoft Certified Support
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Welcome to Tech Audio
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8">
              Your trusted Microsoft support partner. Fast, reliable, and expert
              help — available now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_TEL}
                data-ocid="hero.call_button"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e6c93] hover:bg-[#e8f4fc] transition-colors px-7 py-3.5 rounded font-bold text-lg shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now: {PHONE}
              </a>
            </div>
          </motion.div>
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: "Certified Technicians" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Star, text: "5-Star Rated" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80">
                <Icon className="h-5 w-5 text-[#5bc8f5]" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d4a] mb-3">
              Our Support Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Expert help for all your Microsoft software and account needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                title: "Microsoft Windows Support",
                items: [
                  "Installation & upgrades",
                  "System performance optimization",
                  "Driver & update issues",
                  "Blue screen & crash recovery",
                ],
                ocid: "services.windows.card",
              },
              {
                icon: FileText,
                title: "Microsoft Office Support",
                items: [
                  "Word, Excel & PowerPoint help",
                  "Outlook email configuration",
                  "Microsoft Teams setup",
                  "Office 365 / Microsoft 365",
                  "License activation issues",
                ],
                ocid: "services.office.card",
              },
              {
                icon: Mail,
                title: "Email & Account Support",
                items: [
                  "Outlook & Hotmail setup",
                  "Account recovery & reset",
                  "Two-factor authentication",
                  "Email migration",
                  "Security & spam protection",
                ],
                ocid: "services.email.card",
              },
            ].map(({ icon: Icon, title, items, ocid }, idx) => (
              <motion.div
                key={title}
                data-ocid={ocid}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#1e6c93]" />
                </div>
                <h3 className="text-lg font-bold text-[#0f2d4a] mb-3">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-[#1e6c93] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={PHONE_TEL}
                  data-ocid={`${ocid.split(".")[1]}.call_button`}
                  className="mt-5 block text-center bg-[#1e6c93] hover:bg-[#1a5f82] text-white py-2.5 rounded font-semibold text-sm transition-colors"
                >
                  Get Help Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d4a] mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Get your issue resolved in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-[#1e6c93]/20" />

            {[
              {
                step: "1",
                title: "Call Us",
                desc: "Dial 855-788-5861 and connect instantly with a certified tech support specialist.",
                icon: Phone,
              },
              {
                step: "2",
                title: "Diagnose Issue",
                desc: "Our expert will remotely or verbally diagnose your Microsoft problem quickly and accurately.",
                icon: Monitor,
              },
              {
                step: "3",
                title: "Get Fixed",
                desc: "We resolve your issue fast so you can get back to work — fully supported, stress-free.",
                icon: CheckCircle,
              },
            ].map(({ step, title, desc, icon: Icon }, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 rounded-full bg-[#1e6c93] flex items-center justify-center mb-5 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-[#1e6c93] flex items-center justify-center text-[#1e6c93] font-bold text-sm">
                    {step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0f2d4a] mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d4a] mb-3">
              Why Choose Tech Audio?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Round-the-clock support, whenever you need us.",
              },
              {
                icon: Shield,
                title: "Certified Experts",
                desc: "Trained and certified Microsoft support technicians.",
              },
              {
                icon: Star,
                title: "Trusted by Thousands",
                desc: "5-star ratings from satisfied customers nationwide.",
              },
              {
                icon: HeadphonesIcon,
                title: "Remote Assistance",
                desc: "Quick remote support — no need to visit a store.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#1e6c93] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-[#0f2d4a] mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0f2d4a 0%, #1e6c93 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Need Help? Call Us Now
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Our Microsoft-certified experts are standing by, ready to fix your
            issue immediately.
          </p>
          <a
            href={PHONE_TEL}
            data-ocid="cta.call_button"
            className="inline-flex items-center gap-3 bg-white text-[#1e6c93] hover:bg-[#e8f4fc] transition-colors px-10 py-5 rounded-lg font-bold text-2xl shadow-xl"
          >
            <Phone className="h-7 w-7" />
            {PHONE}
          </a>
          <p className="mt-5 text-white/60 text-sm">
            Available 24 hours a day, 7 days a week
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f35] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <HeadphonesIcon className="h-6 w-6 text-[#5bc8f5]" />
                <span className="text-lg font-bold">
                  Tech<span className="text-[#5bc8f5]">Audio</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tech Audio Support Services provides expert Microsoft technical
                support to homes and businesses across the United States.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-white">Our Services</h4>
              <ul className="space-y-1.5 text-gray-400 text-sm">
                <li>Microsoft Windows Support</li>
                <li>Microsoft Office Support</li>
                <li>Email & Account Support</li>
                <li>Remote PC Assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-white">Contact Us</h4>
              <a
                href={PHONE_TEL}
                data-ocid="footer.phone.link"
                className="flex items-center gap-2 text-[#5bc8f5] hover:text-white transition-colors text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                {PHONE}
              </a>
              <p className="text-gray-400 text-sm mt-2">
                Available 24/7 for immediate support
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Tech Audio Support Services. All
              rights reserved.
            </p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5bc8f5] hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
