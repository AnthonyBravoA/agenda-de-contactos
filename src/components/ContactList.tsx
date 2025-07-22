import { Contact } from '../types/Contact.tsx'

interface ContactListProps {
  contacts: Contact[]
  onDelete: (id: string) => void
  onEdit: (contact: Contact) => void
}

function ContactList({ contacts, onDelete, onEdit }: ContactListProps) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p className="empty-message">No hay contactos agregados</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className="contact-item">
              <div>
                <div className="contact-info">
                  <strong>{contact.name} {contact.lastName}</strong>
                  <div className="contact-details">
                    <span>📧 {contact.email}</span>
                    <span>📞 {contact.phone}</span>
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <button onClick={() => onEdit(contact)}>Editar</button>
                <button onClick={() => onDelete(contact.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ContactList