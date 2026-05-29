import { Mail, Phone, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from "@/lib/utils"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-gray-900 font-sans selection:bg-gray-200">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
              Reach Us At Anytime
            </h1>
            <p className="text-lg text-gray-500">
              Have questions or need any help? We're here to help you with that
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">

              {/* Email Card */}
              <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-start h-[240px] justify-between transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="w-12 h-12 bg-[#2C2C2C] rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 leading-relaxed">
                    Feel free to email me if you have any questions or need more details!
                  </p>
                  <a href="mailto:orbai@support.com" className="inline-block text-gray-900 font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors">
                    orbai@support.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-start h-[240px] justify-between transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="w-12 h-12 bg-[#2C2C2C] rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 leading-relaxed">
                    Feel free to book a call if that's more convenient and easier for you
                  </p>
                  <a href="#" className="inline-block text-gray-900 font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors">
                    Book a call
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 h-full">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fullname" className="text-sm font-medium text-gray-700 ml-1">
                      Full Name
                    </label>
                    <Input
                      id="fullname"
                      placeholder="Ikta Sollork"
                      className="h-12 bg-[#F5F5F7] border-0 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300 text-gray-900 placeholder:text-gray-400 px-4 shadow-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="orbai@support.com"
                      className="h-12 bg-[#F5F5F7] border-0 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300 text-gray-900 placeholder:text-gray-400 px-4 shadow-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 ml-1">
                      Subject Of Interest
                    </label>
                    <Input
                      id="subject"
                      placeholder="Regarding Project"
                      className="h-12 bg-[#F5F5F7] border-0 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300 text-gray-900 placeholder:text-gray-400 px-4 shadow-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">
                      How may we assist you?
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Give us more info.."
                      className="min-h-[120px] bg-[#F5F5F7] border-0 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300 text-gray-900 placeholder:text-gray-400 p-4 resize-none shadow-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium rounded-xl shadow-lg shadow-black/5 mt-4 transition-all"
                  >
                    Send Your Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
