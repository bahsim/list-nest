### Prompt

Atomic component system

### Result

#### Atomic Design Component System for **ListNest**

Atomic design is a methodology for creating modular and scalable design systems. It breaks down UI elements into five hierarchical levels: **Atoms**, **Molecules**, **Organisms**, **Templates**, and **Pages**. Below is the atomic component system tailored for the **ListNest** brand.

---

#### **1. Atoms**
Atoms are the smallest building blocks of the design system. They include basic elements like colors, typography, and individual UI components.

##### **Colors**
- **Primary Colors**:  
  - Coral Red (#F76C5E)  
  - Sky Blue (#4A90E2)  
  - Midnight Navy (#2A2E35)  
- **Accent Colors**:  
  - Golden Yellow (#F9C74F)  
  - Soft Beige (#FFF6E5)  

##### **Typography**
- **Font Family**:  
  - Primary: **Poppins**  
  - Secondary: **Inter**  
- **Font Sizes**:  
  - Heading: 24px, 32px  
  - Body Text: 16px, 18px  
  - Caption: 12px  

##### **Buttons**
- **Primary Button**: Coral Red background, white text.  
- **Secondary Button**: Sky Blue outline, white or navy text.  
- **Hover States**: Slight color darkening and subtle shadow.

##### **Icons**
- Style: Line-based, rounded edges.  
- Colors: Midnight Navy with Coral Red or Sky Blue accents.  

---

#### **2. Molecules**
Molecules are combinations of atoms that form small functional components.

##### **Input Field**
- **Structure**:  
  - Label (Typography Atom)  
  - Input Box (Rounded corners, Soft Beige background)  
  - Placeholder text (Light Gray)  

##### **Button with Icon**
- **Structure**:  
  - Icon (Atom)  
  - Text Label (Typography Atom)  
  - Button Background (Color Atom)  

##### **Checkbox**
- **Structure**:  
  - Box (Rounded corners, Coral Red border)  
  - Checkmark (Sky Blue fill on selection)  
  - Label (Typography Atom)  

##### **Card**
- **Structure**:  
  - Background (Soft Beige)  
  - Icon (Atom)  
  - Title (Typography Atom)  
  - Description (Typography Atom)  

---

#### **3. Organisms**
Organisms are groups of molecules that form distinct sections of the interface.

##### **Header**
- **Structure**:  
  - Logo (Atom)  
  - Navigation Links (Typography Atom)  
  - Search Bar (Input Field Molecule)  
  - Profile Icon  

##### **Task List**
- **Structure**:  
  - Card Molecule for each task  
  - Checkbox Molecule for task completion  
  - Add Task Button (Button with Icon Molecule)  

##### **Footer**
- **Structure**:  
  - Navigation Links (Typography Atom)  
  - Social Media Icons (Icon Atom)  
  - Copyright Text  

---

#### **4. Templates**
Templates are layouts that combine organisms to create reusable page structures.

##### **Home Page Template**
- **Header Organism**  
- **Hero Section**:  
  - Illustration (Brand Style)  
  - Tagline (Typography Atom)  
  - Call-to-Action Button (Button Molecule)  
- **Task List Organism**  
- **Footer Organism**

##### **Task Management Page Template**
- **Header Organism**  
- **Sidebar**:  
  - Navigation Links (Typography Atom)  
  - Filters (Checkbox Molecule)  
- **Main Content**:  
  - Task List Organism  
  - Add Task Button  

---

#### **5. Pages**
Pages are specific instances of templates with real content applied.

##### **Home Page**
- Displays the logo, tagline, and a preview of the task list.  
- Includes a call-to-action button to sign up or log in.

##### **Task Management Page**
- Allows users to view, add, edit, and organize tasks.  
- Includes filters for sorting tasks by priority, category, or due date.

##### **Settings Page**
- Provides options for customizing the app, such as theme selection, notification preferences, and account management.

---

#### **Benefits of Atomic Design for ListNest**
1. **Scalability**: Components can be reused across different pages and features.  
2. **Consistency**: Ensures a cohesive look and feel throughout the app.  
3. **Efficiency**: Speeds up development by using pre-built components.  
4. **Flexibility**: Allows for easy updates and modifications without affecting the entire system.

This atomic design system ensures that **ListNest** maintains a modular, user-friendly, and visually appealing interface while supporting future scalability and growth.