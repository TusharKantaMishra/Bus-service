"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Shield, UserCheck, Building, Phone, Users, User, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { THEME_CLASSES } from "@/lib/theme"

export default function AgentRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    branchPreference: "",
    address: "",
    reason: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Agent registration submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/bus-fleet.jpg"
          alt="Bus Fleet Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-slate-900/60"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <Card className={THEME_CLASSES.CARD_GLASS + " shadow-2xl border-white/20"}>
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse flex items-center justify-center">
                  <Users className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            
            <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
              Join Our Agent Network
            </CardTitle>
            <CardDescription className="text-white/90 text-lg font-medium drop-shadow-md">
              Apply to become a Nandighosh Travel Agent
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">Personal Information</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400 z-10 pointer-events-none" />
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={THEME_CLASSES.INPUT_GLASS + " pl-10 text-black placeholder:text-gray-500 border-white/30 focus:border-green-300/60 h-12"}
                      required
                    />
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400 z-10 pointer-events-none" />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={THEME_CLASSES.INPUT_GLASS + " pl-10 text-black placeholder:text-gray-500 border-white/30 focus:border-green-300/60 h-12"}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">Contact Details</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400 z-10 pointer-events-none" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={THEME_CLASSES.INPUT_GLASS + " pl-10 text-black placeholder:text-gray-500 border-white/30 focus:border-blue-300/60 h-12"}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400 z-10 pointer-events-none" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={THEME_CLASSES.INPUT_GLASS + " pl-10 text-black placeholder:text-gray-500 border-white/30 focus:border-blue-300/60 h-12"}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">Professional Experience</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400 z-10 pointer-events-none" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      title="Select your experience in travel industry"
                      className={THEME_CLASSES.INPUT_GLASS + " w-full pl-10 text-black border-white/30 focus:border-purple-300/60 h-12 appearance-none"}
                      required
                    >
                      <option value="" className="text-gray-500">Experience in Travel</option>
                      <option value="0-1" className="text-black">0-1 years</option>
                      <option value="1-3" className="text-black">1-3 years</option>
                      <option value="3-5" className="text-black">3-5 years</option>
                      <option value="5+" className="text-black">5+ years</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400 z-10 pointer-events-none" />
                    <select
                      name="branchPreference"
                      value={formData.branchPreference}
                      onChange={handleInputChange}
                      title="Select your preferred branch location"
                      className={THEME_CLASSES.INPUT_GLASS + " w-full pl-10 text-black border-white/30 focus:border-purple-300/60 h-12 appearance-none"}
                      required
                    >
                      <option value="" className="text-gray-500">Preferred Branch</option>
                      <option value="bhubaneswar" className="text-black">Bhubaneswar</option>
                      <option value="cuttack" className="text-black">Cuttack</option>
                      <option value="puri" className="text-black">Puri</option>
                      <option value="balasore" className="text-black">Balasore</option>
                      <option value="berhampur" className="text-black">Berhampur</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location Information Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">Location Details</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-400 z-10 pointer-events-none" />
                  <Input
                    type="text"
                    name="address"
                    placeholder="Full Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={THEME_CLASSES.INPUT_GLASS + " pl-10 text-black placeholder:text-gray-500 border-white/30 focus:border-orange-300/60 h-12"}
                    required
                  />
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">Tell Us More</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
                </div>
                <div className="relative">
                  <textarea
                    name="reason"
                    placeholder="Why do you want to join Nandighosh as an agent? Share your motivation and goals... (Optional)"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={4}
                    className={THEME_CLASSES.INPUT_GLASS + " w-full p-4 text-black placeholder:text-gray-500 border-white/30 focus:border-yellow-300/60 resize-none"}
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3 text-sm pt-4 border-t border-white/20">
                <input 
                  type="checkbox" 
                  title="Accept terms and conditions"
                  className="mt-1 accent-green-500 w-4 h-4 rounded border-white/30 bg-white/10" 
                  required
                />
                <label className="text-white/90 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-green-300 hover:text-green-200 underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-green-300 hover:text-green-200 underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border border-green-400/30 hover:border-green-300/50 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 px-6 rounded-xl font-semibold btn-interactive ripple text-lg"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Submit Application
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-white/80 font-medium text-sm">
                Already an agent?
                <Link 
                  href="/agent/login" 
                  className="ml-2 text-green-300 hover:text-green-200 font-bold transition-colors duration-200 underline hover:no-underline"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-4 text-center">
              <Link
                href="/"
                className="text-white/60 hover:text-white/80 text-sm font-medium underline hover:no-underline transition-all duration-200"
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
