import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Tableau de bord (soon)",
    type: "item",
    icon: <Icon.PieChart size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
    disabled: true
  },
  {
    id: "agenda",
    title: "Agenda",
    type: "item",
    icon: <Icon.Calendar size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/agenda",
  },
  {
    id: "tasks",
    title: "Tâches (soon)",
    type: "item",
    icon: <Icon.CheckCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/tasks",
    disabled: true
  },
  {
    type: "groupHeader",
    groupTitle: "Prospection (soon)"
  },
  /*{
    id: "prospecting",
    title: "Piges",
    type: "item",
    icon: <Icon.Phone size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/prospecting/piges",
    disabled: true
  },
  {
    id: "sell-projects",
    title: "Projets Vente",
    type: "item",
    icon: <Icon.Share2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/projects/sell",
    disabled: true
  },*/
  {
    type: "groupHeader",
    groupTitle: "Projets"
  },
  {
    id: "sell-projects",
    title: "Ventes",
    type: "item",
    icon: <Icon.Share2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/sellProject",
  },
  {
    id: "buy-projects",
    title: "Achats",
    type: "item",
    icon: <Icon.Share2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/buyProject",
  },
  /*{
    id: "polpo",
    title: "Polpo",
    type: "item",
    icon: <Icon.Crosshair size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/polpo",
    disabled: true
  },*/
  {
    type: "groupHeader",
    groupTitle: "Bases"
  },
  {
    id: "clients",
    title: "Clients",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/clients"
  },
  {
    id: "properties",
    title: "Biens",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/properties"
    },
  {
    type: "groupHeader",
    groupTitle: "Admin"
  },
  {
    id: "users",
    title: "Collaborateurs",
    type: "item",
    icon: <Icon.Users size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/users",
    
  },
  {
    id: "agencies",
    title: "Agences",
    type: "item",
    icon: <Icon.Printer size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/agencies",
  },
  {
    id: "settings",
    title: "Paramètres (soon)",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/settings",
    disabled: true
  }
]

export default navigationConfig
