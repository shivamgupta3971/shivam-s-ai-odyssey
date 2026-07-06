import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_URL } from "@/data/portfolio";

export const Resume = () => {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="section-eyebrow mb-4">// Document</div>
          <h2 className="section-heading">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The full dossier — preview inline or download for offline review.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card neon-border rounded-3xl overflow-hidden shadow-elegant">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/60">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">Shivam_Gupta_Resume.pdf</span>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="neon" size="sm">
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open</span>
                  </a>
                </Button>
                <Button asChild variant="hero" size="sm">
                  <a href={RESUME_URL} download="Shivam_Gupta_Resume.pdf">
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </Button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="bg-background/40 h-[75vh] min-h-[520px]">
              <object
                data={`${RESUME_URL}#toolbar=0&view=FitH`}
                type="application/pdf"
                className="w-full h-full"
                aria-label="Shivam Gupta Resume PDF"
              >
                <iframe
                  src={RESUME_URL}
                  className="w-full h-full"
                  title="Resume PDF"
                />
                <div className="p-8 text-center text-muted-foreground">
                  Your browser doesn't support embedded PDFs.{" "}
                  <a href={RESUME_URL} className="text-primary underline" download>
                    Download the resume
                  </a>
                  .
                </div>
              </object>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
