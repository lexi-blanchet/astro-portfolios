import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Hero singleton
const hero = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/hero" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      avatar: image(),
      location: z.string().optional(),
      socialLinks: z.array(
        z.object({
          url: z.string(),
          icon: z.enum([
            "GitHub",
            "LinkedIn",
            "Twitter",
            "Bluesky",
            "Instagram",
            "YouTube",
            "Email",
            "FolderCode",
          ]),
          label: z.string(),
        })
      ),
    }),
});

// Education collection
const education = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdoc,yaml}",
    base: "./src/content/education",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      logo: image().optional(),
      link: z.string().url().optional(),
    }),
});

// About singleton
const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/about" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subheader: z.string().optional(),
      photo: image().optional(),
      link: z.string().url().optional(),
    }),
});

// General singleton
const general = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/general" }),
  schema: z.object({
    enableThemeSelector: z.boolean(),
    extraLinksEnabled: z.boolean(),
    extraLinks: z.array(
      z.object({
        link: z.string(),
        icon: z.enum([
          "Flower2",
          "BookOpen",
          "FileText",
          "CodeXml",
          "Mail",
          "Home",
          "User",
          "Briefcase",
          "GraduationCap",
          "Link",
        ]),
        label: z.string(),
        displayOn: z.enum(["both", "dock", "fab"]).optional().default("both"),
      })
    ),
    showAboutSection: z.boolean(),
    showProjectsSection: z.boolean(),
    showBlogSection: z.boolean(),
    showWorkSection: z.boolean(),
    showEducationSection: z.boolean(),
    showHackathonsSection: z.boolean(),
    showContactSection: z.boolean(),
    projectsLayout: z
      .enum(["grid", "tabs-horizontal", "tabs-vertical"])
      .optional()
      .default("grid"),
  }),
});

// Contact singleton
const contact = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/contact" }),
  schema: z.object({
    icon: z.enum(["MessageCircleCode", "Mail", "Phone", "Instagram"]),
    linkUrl: z.string().url(),
    linkText: z.string(),
    footerIcon: z.enum(["Pickaxe", "Hammer", "Heart"]),
    footerText: z.string(),
    footerLinkText: z.string(),
    footerLinkUrl: z.string().url(),
  }),
});

// Carousel singleton
const carousel = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,yaml}", base: "./src/content/carousel" }),
  schema: ({ image }) => z.object({
    slides: z.array(
      z.object({
        alt: z.string(),
        image: image(),
      })
    ),
  }),
});

export const collections = {
  hero,
  education,
  about,
  general,
  contact,
  carousel,
};

