package com.example.backend.services;

import com.example.backend.models.Document;
import com.example.backend.models.User;
import com.example.backend.repositories.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    public List<Document> getDocumentsByUser(User user) {
        return documentRepository.findByOwner(user);
    }

    public void saveDocument(Document document) {
        documentRepository.save(document);
    }
}
