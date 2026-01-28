import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, FileText, GraduationCap, Mail, User } from "lucide-react";

export default function AcademicWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sudhir K. Singh</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#research" className="hover:text-blue-600">Working Papers</a>
            <a href="#publications" className="hover:text-blue-600">Publications</a>
            <a href="#teaching" className="hover:text-blue-600">Teaching</a>
            <a href="#cv" className="hover:text-blue-600">CV</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            src="/profile.jpg"
            alt="Sudhir K. Singh"
            className="mx-auto rounded-full w-48 h-48 mb-6 shadow-md object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Sudhir K. Singh
          </motion.h2>
          <p className="text-lg text-gray-700">
            Postdoctoral Scholar in Economics | University of Rochester<br />
            Fellow, Global Labor Organization | Former Economist, World Bank Group
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center"><User className="mr-2" /> About Me</h3>
        <p>
          I am currently a Postdoctoral Scholar in the Department of Economics at the University of Rochester. I am also a Fellow at the Global Labor Organization and previously worked as an Economist at the World Bank Group.
        </p>
      </section>

      {/* Working Papers Section */}
      <section id="research" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center"><BookOpen className="mr-2" /> Working Papers</h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Misallocation and Product Choice (with Stepan Gordeev)</li>
                  <li>Input-Driven Production Technology Heterogeneity and the Allocation of Inputs (with Stepan Gordeev)</li>
                  <li>Political Exit: The Unintended Effects of Electoral Rules in India (with Varun K.R. & Drew Stommes)</li>
                  <li>Identity-Based Political Connections and Public Employment (formerly titled “One of Our Own…”) </li>
                  <li>How Productive are Workfare Programs? Evidence from India (with Klaus Deininger & Songqing Jin)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center"><FileText className="mr-2" /> Publications</h3>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Journal Articles</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Addressing Declining Female Labor Force Participation in India: Does Political Empowerment Make a Difference? with K. Deininger, S. Jin, & H. K. Nagarajan. <i>Journal of Development Studies</i>, 2022.</li>
                <li>Women’s Political Leadership and Economic Empowerment: Evidence from Public Works in India with K. Deininger & H. K. Nagarajan. <i>Journal of Comparative Economics</i>, 2020.</li>
                <li>Wages, Prices, and Agriculture: How Can Indian Agriculture Cope with Rising Wages with H. Binswanger. <i>Journal of Agricultural Economics</i>, 2018.</li>
                <li>Can Labor Market Imperfections Explain Changes in Farm Size Productivity Relationship? Longitudinal Evidence from India with K. Deininger, S. Jin, & Y. Liu. <i>Land Economics</i>, 2018.</li>
                <li>Determinants of Productivity and Structural Change in a Large Commercial Farm Environment: Evidence from Ukraine with K. Deininger & D. Nizalov. <i>The World Bank Economic Review</i>, 2017.</li>
                <li>Does Land Fragmentation Increase the Cost of Cultivation? Evidence from India with K. Deininger, D. Monchuk, & H. K. Nagarajan. <i>Journal of Development Studies</i>, 2016.</li>
                <li>Consumption Smoothing and Insurance against the Income Risks: A Case of India with P. Kumar. <i>Indian Economic Review</i>, 2012.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center"><GraduationCap className="mr-2" /> Teaching</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Advanced Multivariate Analysis (Graduate-level, Spring 2025, University of Rochester)</li>
            <li>Economic Research and Communication (Undergraduate-level, Spring 2025, University of Rochester)</li>
            <li>Advanced Quantitative Methods: Causal Inference (Graduate-level, Fall 2024, University of Rochester)</li>
            <li>Guest Lecture: Advanced Quantitative Methods: Causal Inference (Graduate-level, Fall 2023, University of Rochester)</li>
          </ul>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center"><FileText className="mr-2" /> Curriculum Vitae</h3>
        <Button variant="outline" asChild>
          <a href="/Sudhir_Singh_CV.pdf" target="_blank">Download CV</a>
        </Button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center"><Mail className="mr-2" /> Contact</h3>
          <p>Email: <a href="mailto:sudhir.singh@rochester.edu" className="text-blue-600">sudhir.singh@rochester.edu</a></p>
          <p>Google Scholar | ORCID | LinkedIn</p>
        </div>
      </section>

 <footer class="site-footer">
  <p>© 2026 Sudhir K Singh</p>
</footer>
    </div>
  );
}
