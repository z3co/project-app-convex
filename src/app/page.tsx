import { Button } from "~/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  FileText,
  LinkIcon,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react"
import { ModeToggle } from "~/components/mode-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ProjectHub
            </span>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              variant="ghost"
              className="hidden md:inline-flex hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-950/20 dark:hover:to-blue-950/20"
            >
              Sign In
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-0"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden px-6 md:px-8">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-blue-100/30 to-cyan-100/50 dark:from-purple-900/20 dark:via-blue-900/10 dark:to-cyan-900/20 -z-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse -z-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

          <div className="mx-auto max-w-4xl text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border border-purple-200 dark:border-purple-800 mb-6">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                New: AI-powered project insights
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Manage Projects Like a{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track tasks, manage files, organize links, and collaborate with your team—all in one beautifully designed
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/25"
              >
                <Link href="/dashboard">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-gradient hover:shadow-lg"
              >
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful features designed with beautiful gradients and intuitive design.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                  Task Management
                </CardTitle>
                <CardDescription>
                  Create, assign, and track tasks with beautiful priority indicators and due dates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Team Collaboration
                </CardTitle>
                <CardDescription>
                  Work together seamlessly with real-time updates and colorful team assignments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                  File Management
                </CardTitle>
                <CardDescription>
                  Upload, organize, and share files with beautiful previews and smart categorization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mb-4">
                  <LinkIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                  Link Organization
                </CardTitle>
                <CardDescription>
                  Save and categorize important links with colorful tags and instant previews.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">
                  Timeline Tracking
                </CardTitle>
                <CardDescription>
                  Visualize project progress with colorful timelines and milestone celebrations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                  Analytics & Reports
                </CardTitle>
                <CardDescription>
                  Get beautiful insights with colorful charts and interactive dashboards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-24 bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/20 px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why teams{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">love</span>{" "}
              ProjectHub
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Ultra Secure
              </h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with beautiful encryption indicators and compliance dashboards.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                Blazing performance with smooth animations and instant updates across all devices.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Globally Accessible
              </h3>
              <p className="text-muted-foreground">
                Access your colorful projects from anywhere with our beautiful cloud platform.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-24 overflow-hidden px-6 md:px-8">
          {/* Vibrant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-blue-100/60 to-cyan-100/80 dark:from-purple-900/40 dark:via-blue-900/20 dark:to-cyan-900/40 -z-10" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-pink-400/40 to-purple-600/40 rounded-full blur-3xl animate-pulse -z-10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

          <div className="mx-auto max-w-4xl text-center relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                workflow?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams creating beautiful projects with our colorful platform.
            </p>
            <Button
              size="lg"
              asChild
              className="text-lg px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white border-0 shadow-2xl shadow-purple-500/30 hover:shadow-pink-500/30 transition-all duration-300"
            >
              <Link href="/dashboard">
                Start Your Colorful Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ProjectHub
              </span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 ProjectHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
